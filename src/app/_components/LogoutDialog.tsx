"use client";

import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Logout from "@mui/icons-material/Logout";
import { supabase } from "~/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutDialog({open, onClose,}: {open: boolean; onClose: React.Dispatch<React.SetStateAction<boolean>>}) {

    const router = useRouter();

    async function handleLogout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
        } else {
            onClose(false);
            router.push("/login")
        }
    }


    return (
        <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
            sx: {
            bgcolor: "#1a1a1a",
            borderRadius: 3,
            border: "1px solid #2a2a2a",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            },
        }}
        BackdropProps={{
            sx: {
            backdropFilter: "blur(6px)",
            bgcolor: "rgba(0,0,0,0.7)",
            },
        }}
        >
        <DialogContent sx={{ p: 3, position: "relative" }}>
            {/* Close Button */}
            <IconButton
            onClick={() => onClose(false)}
            sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#888",
                "&:hover": { color: "white" },
            }}
            >
            <Close />
            </IconButton>

            {/* Icon */}
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mb: 1.5,
            }}
            >
            <Logout sx={{ color: "#888" }} />
            </Box>

            {/* Text */}
            <Typography
            sx={{
                color: "white",
                fontWeight: 500,
                textAlign: "center",
                mb: 1,
            }}
            >
            Abmelden?
            </Typography>

            <Typography
            sx={{
                color: "#888",
                fontSize: 14,
                textAlign: "center",
                mb: 3,
            }}
            >
            Möchtest du dich wirklich ausloggen?
            </Typography>

            {/* Actions */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
                fullWidth
                onClick={() => onClose(false)}
                sx={{
                bgcolor: "#2a2a2a",
                color: "white",
                height: 40,
                "&:hover": { bgcolor: "#333" },
                }}
            >
                Abbrechen
            </Button>

            <Button
                fullWidth
                onClick={handleLogout}
                sx={{
                bgcolor: "#c62828",
                color: "white",
                height: 40,
                "&:hover": { bgcolor: "#b71c1c" },
                }}
            >
                Logout
            </Button>
            </Box>
        </DialogContent>
        </Dialog>
    );
}
