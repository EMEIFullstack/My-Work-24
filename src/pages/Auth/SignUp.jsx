import { useState } from "react";

import AuthLayout from "../../Shared/AuthLayout";
import SignUpForm from "../../Components/Auth/SignUp/SignUpForm";
import OtpVerificationModal from "../../Components/Auth/SignUp/OtpVerificationModal";

const SignUp = () => {
  const [otpOpen, setOtpOpen] = useState(false);

  return (
    <AuthLayout>
      <SignUpForm
        onOpenOtp={() => setOtpOpen(true)}
      />

      <OtpVerificationModal
        open={otpOpen}
        onClose={() => setOtpOpen(false)}
      />
    </AuthLayout>
  );
};

export default SignUp;