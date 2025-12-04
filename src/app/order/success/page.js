import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

// export const dynamic = "force-dynamic";  // <-- remove this line

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
