import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Countries } from "../modules/enums";

interface FormProps {
  changeCountry: Function;
}

const Form: FC<FormProps> = ({ changeCountry }) => {
  const [country, setCountry] = useState<Countries>(Countries.USA);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    setCountry(event.target.value as Countries);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    changeCountry(country);
  };

  return (
    <div className="p-2 pt-5 bg-white text-white flex items-center justify-center">
      <form className="flex flex-col items-center [&>*]:mb-3" onSubmit={handleSubmit}>
        <label className="text-2xl text-stone-800" htmlFor="country">
          Select country
        </label>
        <select
          className="p-2 text-xl text-slate-100 border-none bg-stone-700 rounded"
          value={country}
          name="country"
          id="country"
          onChange={handleChange}>
          <option value={Countries.India}>India</option>
          <option value={Countries.USA}>USA</option>
          <option value={Countries.Japan}>Japan</option>
          <option value={Countries.Canada}>Canada</option>
          <option value={Countries.Australia}>Australia</option>
          <option value={Countries.Russia}>Russia</option>
          <option value={Countries.China}>China</option>
          <option value={Countries.Germany}>Germany</option>
          <option value={Countries.Brazil}>Brazil</option>
          <option value={Countries.Mexico}>Mexico</option>
          <option value={Countries.NewZealand}>New Zealand</option>
        </select>

        <input
          className="px-4 py-2 text-xl rounded-2xl cursor-pointer transition-all duration-200 ease-in-out bg-blue-400 hover:px-6 hover:rounded-md"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Form;
