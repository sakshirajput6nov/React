import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulate krte h 
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }

  return (
    <> 
      hello ji

      <form onSubmit={handleSubmit(onSubmit)}>
            
        {/* First Name */}
        <div>
          <label>First Name :</label>

          <input
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              required: true,

              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },

              maxLength: {
                value: 20,
                message: "Maximum 20 characters allowed",
              },

              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets are allowed",
              },
            })}
          />

          {errors.firstName && (
            <p className="error-msg">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <br />

        {/* Middle Name */}
        <div>
          <label>Middle Name :</label>

          <input
            className={errors.middleName ? "input-error" : ""}
            {...register("middleName", {
              required: true,

              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },

              maxLength: {
                value: 20,
                message: "Maximum 20 characters allowed",
              },

              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets are allowed",
              },
            })}
          />

          {errors.middleName && (
            <p className="error-msg">
              {errors.middleName.message}
            </p>
          )}
        </div>

        <br />

        {/* Last Name */}
        <div>
          <label>Last Name :</label>

          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName", {
              required: true,

              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },

              maxLength: {
                value: 20,
                message: "Maximum 20 characters allowed",
              },

              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets are allowed",
              },
            })}
          />

          {errors.lastName && (
            <p className="error-msg">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <br />

        <input type="submit" disabled={isSubmitting} value={isSubmitting ?"submitting":"submit"}/>

      </form>
    </>
  );
}

export default App;