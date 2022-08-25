import clsx from "clsx";

const Button = ({ variant, children }) => {
  return (
    <button className={clsx("py-4 px-2", {
      [`bg-red-600`]: variant === "primary",
      [`bg-blue-600`]: variant === "secondary",
      [`bg-gray-600`]: variant === "default",
    })}>
      {children}
    </button>
  );
};

const Styles = () => {
  return (
    <div>
      <Button variant="primary">Red</Button>
      <Button variant="secondary">Blue</Button>
      <Button variant="default">Default</Button>
    </div>
  );
};

export default Styles;
