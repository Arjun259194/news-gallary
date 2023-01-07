import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Countries } from "../modules/enums";
import { FormProps } from "../modules/interfaces";

const Form: FC<FormProps> = ({ fetchData }) => {
  const [country, setCountry] = useState<Countries>(Countries.USA);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCountry(event.target.value as Countries);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchData(country);
  };

  //! style the component after the login is done
  return (
    <div className="p-2 border-2 border-stone-800 inline-block">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country">Select country</label>
          <select value={country} name="country" id="country" onChange={handleChange}>
            <option value={Countries.India}>India</option>
            <option value={Countries.USA}>USA</option>
            <option value={Countries.Japan}>Japan</option>
            <option value={Countries.Canada}>Canada</option>
            <option value={Countries.Australia}>Australia</option>
          </select>
        </div>

        <input
          className="px-4 py-1 mx-2 rounded bg-blue-400"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Form;
