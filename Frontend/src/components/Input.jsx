const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6 mr-2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <Icon className="size-8" />
      </div>
      <input
        style={{ color: "#3B82F6" }}
        {...props}
        className="w-full pl-10 pr-3 py-2 ml-3 bg-white first-line:bg-opacity-50 rounded-lg border border-blackplaceholder-gray transition duration-200"
      />
    </div>
  );
};
export default Input;
