import ButtonLink from "@/components/ButtonLink";



type StepProps = {
    stepNumber: number;
    title?: string;
    description?: string;
    selected: boolean;
  };

  type FormStepProps = {
    title: string;
    description: string;
    linkText?: string;
};


  const FormStep: React.FC<FormStepProps> = ({ title, description, linkText }) => (
    <>
        <div className="flex gap-3 text-center  items-end whitespace-nowrap">
          <div className="flex gap-3 text-center whitespace-nowrap items-center">
            <div className=" w-1 h-6  bg-defaultblue"></div>
            <div className=" font-bold text-2xl" >{title}</div>
            </div>
            <div className=" text-xl " style={{fontFamily:'alibb'}}>{description}</div>
            {linkText && <ButtonLink className="text-xl text-blue-500">{linkText}</ButtonLink >}
        </div>
        {/* <div className="shrink-0 self-stretch mt-9 h-px bg-zinc-300"></div> */}
    </>
);

  

  export default FormStep