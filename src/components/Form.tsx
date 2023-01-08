import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Countries } from "../modules/enums";

interface FormProps {
  changeCountry: Function;
}

const Form: FC<FormProps> = ({ changeCountry }) => {
  const [country, setCountry] = useState<Countries>(Countries.USA);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    setCountry(event.target.value as Countries);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    changeCountry(country);
  };

  return (
    <div className="p-2 pt-5 bg-stone-800 text-white flex items-center justify-center">
      <form className="flex flex-col items-center [&>*]:mb-3" onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="country">
          Select country
        </label>
        <select
          className="p-2 text-xl text-blue-100 bg-stone-700 rounded"
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
          className="px-6 py-2 text-xl rounded-2xl  transition-all duration-200 ease-in-out bg-blue-400 hover:rounded-md"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Form;
