import { Header } from "@/layout";

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
