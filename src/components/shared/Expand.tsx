const Expand = ({
  children,
  innerClassName,
}: {
  children: React.ReactNode;
  innerClassName?: string;
}) => {
  return (
    <div className="grid grid-rows-1 animate-open">
      <div className={"overflow-hidden " + innerClassName}>{children}</div>
    </div>
  );
};
export default Expand;
