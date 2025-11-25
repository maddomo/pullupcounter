"use client";

import { Card, Typography, Box, IconButton, Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

export function AddPullUpsCard({
    count,
    onIncrease,
    onDecrease,
    onSubmit
}: {
    count: number,
    onIncrease: () => void;
    onDecrease: () => void;
    onSubmit: () => void;
}){
    return(
    <Card
          sx={{
            bgcolor: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: 2,
            p: 4,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          <Typography
            variant="body2"
            sx={{ 
              color: "#888", 
              mb: 3, 
              textAlign: "center",
              fontSize: 13,
              letterSpacing: 0.5
            }}
          >
            PULLUPS HINZUFÜGEN
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, mb: 3 }}>
            <IconButton
              aria-label="remove"
              onClick={() => onDecrease()}
              disabled={count <= 0}
              sx={{
                bgcolor: "#2a2a2a",
                color: "white",
                width: 48,
                height: 48,
                "&:hover": {
                  bgcolor: "#333",
                },
                "&:disabled": {
                  bgcolor: "#1a1a1a",
                  color: "#444"
                }
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
                textAlign: "center"
              }}
            >
              {count}
            </Typography>

            <IconButton 
              aria-label="add"
              onClick={() => onIncrease()}
              sx={{
                bgcolor: "#2a2a2a",
                color: "white",
                width: 48,
                height: 48,
                "&:hover": {
                  bgcolor: "#333",
                }
              }}
            >
              <Add />
            </IconButton>
          </Box>
          <Box alignItems="center" justifyContent="center" display="flex">
            <Button
              sx={{
                    bgcolor: "#2a2a2a",
                    color: "white",
                    minWidth: 100,
                    height: 48,
                    "&:hover": {
                      bgcolor: "#333",
                    }
                  }} 
              onClick={() => onSubmit()}
              
            >
              ABSENDEN
            </Button>
          </Box>
        </Card>
    )
}