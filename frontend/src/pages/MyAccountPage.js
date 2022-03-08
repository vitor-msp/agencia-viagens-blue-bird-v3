import { FormMyAccount } from "../components/forms/FormMyAccount";

export function MyAccountPage() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Minha Conta</strong>
      </h1>
      <FormMyAccount />
    </div>
  );
}