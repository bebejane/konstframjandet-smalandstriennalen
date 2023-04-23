import ResetPassword from "../ResetPassword";

export function resetPassword() {
  return (
    <ResetPassword
      body={
        <>
          We’ve received your request to change your password. Use the link
          below to set up a new password for your account. This link is only
          usable once! If you need to, you can reinitiate the password process
          again <a href='https://localhost:3000'>here</a>.
        </>
      }
      link={'https://localhost:3000'}
      ctaText="Återställ lösenord"
    />
  );
}
