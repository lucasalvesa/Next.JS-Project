import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

export default function DialogButtonSelect({ text }: { text: string }) {
    const [open, setOpen] = useState(false);
    
    const buttonNamesMapping: { [key: string]: string } = {
        'Nota Fiscal': 'Cadastrar',
        'Liquidação': 'Liquidar',
        'Pagamento': 'Pagar',
        'ISSQN': 'Pagar ISSQN',
        'INSS': 'Pagar INSS'
    };
    
    const decideButtonName = () => buttonNamesMapping[text] || '';
        
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason === 'backdropClick') {
            setOpen(false);
        }
        setOpen(false);
    };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                sx={{ color: 'inherit' }}
            >
                {text}
            </Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
                <DialogTitle sx={{textAlign: 'center'}}>Selecione a opção para {text}</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ '& button': { m: 4 } }}>
                        <Button variant="outlined" size='large' startIcon={<FormatListNumberedOutlinedIcon />}>
                            Listar
                        </Button>
                        <Button variant="contained" size='large' endIcon={<PlaylistAddOutlinedIcon />}>
                            {decideButtonName()}
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
