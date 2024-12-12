import { TextField } from "@mui/material";

export default function Contact() {
  return (
    <section className="flex justify-center py-11"> 
    <div className="text-slate-800 w-[60%] shadow-xl flex flex-col items-center p-10 xl:p-16">
        <h1 className="2xl:text-4xl 2xl:mb-6 text-3xl font-semibold mb-3">
          Contactez-nous
        </h1>
        <p className="text-lg mb-3 2xl:mb-5">
          Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous
          pour nous contacter.
        </p>
        <section className="space-y-6 flex flex-col items-center w-full 2xl:space-y-10">
          <TextField
            fullWidth
            required
            type="text"
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            sx={outlinedInputStyles}
          />
          <TextField
            fullWidth
            required
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={outlinedInputStyles}
          />
          <TextField
            fullWidth
            required
            multiline
            minRows={5}
            maxRows={8}
            type="text"
            id="outlined-basic"
            label="Message"
            variant="outlined"
            sx={outlinedInputStyles}
          />
          <button className="hover:bg-[#ff9900] bg-[#ffcc00] p-3 px-24 rounded-xl text-slate-800 md:text-lg transition-colors duration-300 xs:text-sm">
            Envoyer
          </button>
        </section>
    </div>
    </section>
  );
}

const outlinedInputStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#334155",
    },
    "&:hover fieldset": {
      borderColor: "#ffcc00",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffcc00",
    },
  },
  "& .MuiInputLabel-outlined": {
    color: "#334155",
  },
  "&:hover .MuiInputLabel-outlined": {
    color: "#ffcc00",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#ffcc00",
    fontWeight: "bold",
  },
};
