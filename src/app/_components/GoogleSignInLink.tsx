import { BaseButton } from "@/components";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInLink() {
  return (
    <BaseButton stylePayload={{ color: "white", size: "md" }} linkProps={{ href: "/" }}>
      <div className="flex items-center justify-center">
        <FcGoogle className="mr-1" />
        <span>ログイン</span>
      </div>
    </BaseButton>
  );
}
