import { redirect } from "next/navigation";

const link = process.env.NEXT_PUBLIC_HOME_REDIRECT_LINK;

export default async function Home() {
  redirect(link!);
}
