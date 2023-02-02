import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function resume() {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        router.push("/Nowak Louis CV_.pdf");
      }}
      sx={{ color: "info.main", marginTop: "1.5rem" }}
    >
      Un Petit Résumé ?
    </Button>
  );
}
