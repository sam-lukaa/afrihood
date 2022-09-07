import { useState } from "react";
import { darkedit as edit, plus, time, connect, briefcase } from "assets/icons";
import { IMain, TabProps, TabItemProps } from "layouts/types";

export const Main = ({ children }: IMain) => {
  const [activeTab, setActiveTab] = useState<string>("Bid");

  const handleToggleTab = (tabName: string): void => {
    setActiveTab(tabName);
  };

  const Heading = ({ text, src }: TabItemProps) => {
    return (
      <div className="font-bold flex items-center gap-[.5rem]">
        <h3>{text}</h3>
        {src && (
          <div className="bg-white rounded-full w-[.92rem] h-[.92rem] p-[.2rem]">
            <img
              src={src}
              width="100%"
              height="100%"
              alt={text}
              className="rounded-full"
            />
          </div>
        )}
      </div>
    );
  };

  const Text = ({ text, src }: TabItemProps) => {
    return (
      <div className="flex items-center gap-[.5rem] cursor-pointer">
        <div className="rounded-full w-[1.2rem] h-[1.2rem] p-[.2rem]">
          <img src={src} width="100%" height="100%" alt={text} />
        </div>
        <p>{text}</p>
      </div>
    );
  };

  const Tab = ({ text, onClick }: TabProps) => {
    return (
      <>
        <h3
          className={`py-[0.56rem] px-[2.56rem] hover:bg-primary hover:text-white transition hover:ease-in hover:duration-[.2s] ease-out duration-[.2s] cursor-pointer rounded-[7px] font-[600] ${
            activeTab === text && "bg-primary text-white"
          }`}
          onClick={onClick}
        >
          {text}
        </h3>
      </>
    );
  };

  return (
    <main className="flex w-full h-full">
      <aside className="hidden md:w-[25%] xl:w-[34.5%] lg:inline-block 2xl:w-[34%] h-full bg-black text-white px-[9.4rem] xl:px-[5.97rem] pt-[3.44rem] pb-[10.81rem] fixed overflow-y-auto">
        <div className="bg-white text-black p-[.1rem] rounded-[7px] flex items-center gap-[0.84rem] mb-[3.01rem]">
          <Tab onClick={() => handleToggleTab("Patronise")} text="Patronise" />
          <Tab onClick={() => handleToggleTab("Bid")} text="Bid" />
        </div>

        {activeTab === "Bid" ? (
          <div className="flex flex-col gap-[2.31rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-bold">My Categories</h3>
              <p>Other-Admin Support</p>
              <p>Personal/Virtual Assistant</p>
              <p>Web Research</p>
              <p>Pro</p>

              <div className="bg-white rounded-full w-[.92rem] h-[.92rem] p-[.2rem]">
                <img
                  src={edit}
                  width="100%"
                  height="100%"
                  alt="edit category"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Heading src={edit} text="Visibility" />
              <Text src={edit} text="Public" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Heading src={edit} text="Availability" />
              <Text src={time} text="More than 30hr/week" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Heading text="Booth Completion" />
              <div className="flex items-center gap-[.44rem]">
                {[...Array(3)].map((rating, _i) => {
                  return (
                    <div
                      className="bg-primary w-[3.44rem] h-[.25rem]"
                      key={_i}
                    ></div>
                  );
                })}
                <p className="text-[.75rem]">100%</p>
              </div>
              <Text src={plus} text="Add Work History" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Heading text="Inventory" />
              <Text src={briefcase} text="My Inventory" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Heading text="Bids" />
              <Text src={connect} text="50 available connects" />
            </div>
          </div>
        ) : (
          "Patronise data here"
        )}
      </aside>
      <section className="md:ml-[28%] lg:ml-[35%] w-[65%] bg-light-grey">
        {children}
      </section>
    </main>
  );
};
