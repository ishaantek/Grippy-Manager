
export default function Partners() {

    return (
      <>
        <div className="w-full my-10">
          <div className="flex w-full justify-center">
            <img width="400" src="/img/bck4.png" />
          </div>
          <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
            <i className="fal fa-stars text-amber-400 mr-2" />
            Team
          </h1>
        </div>

        <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center text-white rounded">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://media.discordapp.net/attachments/1081656082881069147/1081961071683846326/da2d484453aa211d9774474216733123.png"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  Atlantis#8342{" "}
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Bot Owner / Affiliate Manager
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center text-white rounded">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://media.discordapp.net/attachments/1081656082881069147/1081961071411208262/8058e0b279df8f72df8b3f1e2072ad4c.png"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  mf*#4982
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Bot Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center text-white rounded">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://media.discordapp.net/attachments/1081656082881069147/1081961071155363991/675d7d12d0c3410b491ae6ed64a17bdf.png"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  MiniMasterGG#7448
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Affiliate Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center text-white rounded">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <img
                className="rounded-full h-32 w-32"
                src="https://media.discordapp.net/attachments/1081656082881069147/1081961070891114556/30b11b44d55c5f5d5d8d09633668c297.png"
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">
                  MrMPViral#8289
                </h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10"></div>
      </>
    );
};