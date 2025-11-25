"use client"
import React, { useState } from 'react';
import { 
  Stack, 
  Card, 
  TextField, 
  Button, 
  Alert, 
  Typography, 
  Box,
  Link,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Lock as LockIcon,
} from '@mui/icons-material';
import { supabase } from "../../supabase/client";
import { useRouter } from 'next/navigation';

export default function ModernLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const theme  = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const router = useRouter();

  const handleLogin = async () => {
      setLoading(true);
      setErrorMsg("");

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      setLoading(false);

      if (error) {
        setErrorMsg(error.message);
        return;
      }
      const {data: {session }} = await supabase.auth.getSession();
      console.log(session);
      router.push("/");
    };

  return (
    <Stack 
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        position: "relative",
        overflow: "hidden",
        p: 3,
      }}
    >
      {/* Dekorative Hintergrund-Elemente */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(80,80,80,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(100,100,100,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Login Card */}
      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          p: 5,
          background: "rgba(40, 40, 40, 0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(80, 80, 80, 0.3)",
          borderRadius: 4,
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header mit Icon */}
        <Stack alignItems="center" spacing={2} mb={4}>
          {!isMobile && (
          <Box
            sx={{
              p: 2,
              background: "linear-gradient(135deg, #505050 0%, #6a6a6a 100%)",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LockIcon sx={{ fontSize: 32, color: "white" }} />
          </Box>
          )}
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            sx={{ color: "#f5f5f5" }}
          >
            {isMobile ? "Wilkommen" : "Wilkommen zurück"}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: "#9e9e9e" }}
          >
            Melde dich an, um fortzufahren
          </Typography>
        </Stack>

        {/* Form */}
        <Stack spacing={3}>
          {/* Email Input */}
          <TextField
            fullWidth
            type="email"
            label="E-Mail"
            placeholder="beispiel@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#757575" }} />
                  </InputAdornment>
                ),
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                '& fieldset': {
                  borderColor: '#505050',
                },
                '&:hover fieldset': {
                  borderColor: '#6a6a6a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#808080',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9e9e9e',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#b0b0b0',
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            type={"password"}
            label="Passwort"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#757575" }} />
                  </InputAdornment>
                ),
              }}
            }
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                '& fieldset': {
                  borderColor: '#505050',
                },
                '&:hover fieldset': {
                  borderColor: '#6a6a6a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#808080',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9e9e9e',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#b0b0b0',
              },
            }}
          />

          {/* Error Message */}
          {errorMsg && (
            <Alert 
              severity="warning"
              sx={{
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                color: '#ffb74d',
                border: '1px solid rgba(255, 152, 0, 0.3)',
                '& .MuiAlert-icon': {
                  color: '#ffb74d',
                },
              }}
            >
              {errorMsg}
            </Alert>
          )}

          {/* Remember & Forgot 
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox 
                  sx={{
                    color: '#757575',
                    '&.Mui-checked': {
                      color: '#9e9e9e',
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                  Angemeldet bleiben
                </Typography>
              }
            />
            <Link 
              href="#" 
              underline="hover"
              sx={{ 
                color: '#9e9e9e',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#b0b0b0',
                },
              }}
            >
              Passwort vergessen?
            </Link>
          </Stack>

          */}

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleLogin}
            disabled={loading}
            sx={{
              background: "linear-gradient(135deg, #606060 0%, #757575 100%)",
              color: "white",
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: '0 4px 14px 0 rgba(0,0,0,0.3)',
              '&:hover': {
                background: "linear-gradient(135deg, #707070 0%, #858585 100%)",
                boxShadow: '0 6px 20px 0 rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              '&:disabled': {
                background: "linear-gradient(135deg, #404040 0%, #505050 100%)",
                color: "#808080",
              },
              transition: 'all 0.2s ease',
            }}
          >
            {loading ? "Einloggen..." : "Anmelden"}
          </Button>
        </Stack>

        {/* Footer */}
        <Stack alignItems="center" mt={3}>
          <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
            Noch kein Konto?{' '}
            <Link 
              href="#" 
              underline="hover"
              sx={{ 
                color: '#b0b0b0',
                fontWeight: 500,
                '&:hover': {
                  color: '#d0d0d0',
                },
              }}
            >
              Jetzt registrieren
            </Link>
          </Typography>
        </Stack>
      </Card>

      {/* Bottom Shadow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "calc(50% - 250px)",
          width: "300px",
          height: "20px",
          background: "rgba(60, 60, 60, 0.2)",
          borderRadius: "50%",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
    </Stack>
  );
}