export default function Button({title, style }) {
  console.log("props:", title);
  return (
    <>
      <button className={`bg-blue-700 text-white py-2.5 px-4 rounded-lg mt-8 ${style}`}>
        {title || "Default Title"}
      </button>
    </>
  );
}

export function ButtonRegister() {
  return (
    <>
      <button className="bg-red-500 text-white py-2.5 px-4 rounded-lg mt-8">
        Register
      </button>
    </>
  );
}
