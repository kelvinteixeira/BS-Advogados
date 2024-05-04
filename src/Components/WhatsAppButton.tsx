import { IconButton } from "@mui/material";

export const WhatsAppButton = () => {
  const handleWhatsAppButtonClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5583987336830"
    );
  };

  return (
    <IconButton
      onClick={handleWhatsAppButtonClick}
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <img style={{ width: 80, height: 80 }} src="/images/zaplogo.png" alt="" />
    </IconButton>
  );
};
