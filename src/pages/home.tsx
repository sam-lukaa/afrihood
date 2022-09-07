import { map } from "assets/images";

export const Home = (): JSX.Element => {
  return (
    <section>
      <div className="w-full bg-white flex items-center gap-[]">
        <img src={map} alt="map" />
      </div>
    </section>
  );
};
