"use client";

import {
  Typography,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Close from "@mui/icons-material/Close";

export function AddCard({
  count,
  onIncrease,
  onDecrease,
  onSubmit,
  open,
  setOpen,
  label,
  loading,
}: {
  label: string,
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSubmit: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
      <DialogContent sx={{ p: 4, position: "relative" }}>
        {/* ❌ Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#888",
            "&:hover": { color: "white" },
          }}
        >
          <Close />
        </IconButton>

        {/* Header */}
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            mb: 3,
            letterSpacing: 1.5,
            color: "#888",
          }}
        >
          {label} hinzufügen
        </Typography>

        {/* Counter */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mb: 4,
          }}
        >
          <IconButton
            aria-label="remove"
            onClick={onDecrease}
            disabled={count <= 0}
            sx={{
              bgcolor: "#2a2a2a",
              color: "white",
              width: 48,
              height: 48,
              "&:hover": { bgcolor: "#333" },
              "&:disabled": {
                bgcolor: "#1f1f1f",
                color: "#444",
              },
            }}
          >
            <Remove />
          </IconButton>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              color: "white",
              minWidth: 80,
              textAlign: "center",
            }}
          >
            {count}
          </Typography>

          <IconButton
            aria-label="add"
            onClick={onIncrease}
            sx={{
              bgcolor: "#2a2a2a",
              color: "white",
              width: 48,
              height: 48,
              "&:hover": { bgcolor: "#333" },
            }}
          >
            <Add />
          </IconButton>
        </Box>

        {/* Submit */}
      <Button
        fullWidth
        onClick={onSubmit}
        disabled={loading}
        sx={{
          bgcolor: "#2a2a2a",
          color: "white",
          height: 48,
          fontWeight: 500,
          letterSpacing: 0.5,
          display: "flex",
          gap: 1.5,
          "&:hover": {
            bgcolor: "#333",
          },
          "&:disabled": {
            bgcolor: "#1f1f1f",
            color: "#666",
          },
        }}
      >
        {loading ? (
          <CircularProgress size={30} sx={{ color: "#4CAF50" }} />
        ) : (
          "Absenden"
                
        )}
      </Button>

      </DialogContent>
    </Dialog>
  );
}
