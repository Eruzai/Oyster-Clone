import { MailtrapClient } from "mailtrap";

const TOKEN = "2fcd838c38e4d511da085f44f9fb9619";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
