import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
          <img width="500" src="https://i.ibb.co/hRc6gzf/ok.png" />
        </div>
        <br></br>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Grippy Manager
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          This is a YouTube and Twitch automation tool that can automatically
          publish your channel on Discord with personalized mention rankings,
          providing distinct thresholds for those who are affiliated with
          Grippy's.
        </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link
            href={"https://universe-list.xyz/bots/1076426970914635776/invite"}
          >
            <a
              className={
                "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
              }
            >
              Invite Grippy
            </a>
          </Link>
          <div className="py-10"></div>
          <Link href={"https://universe-list.xyz/bots/1076426970914635776/"}>
            <a
              className={
                " px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
              }
            >
              Vote Grippy
            </a>
          </Link>
        </div>

        <div
          style={{ zIndex: "-1" }}
          className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9"
        ></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
        <div className="col-span-4">
          <p
            className="text-white text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: "Grippy Manager" }}
          />
          <p
            className="text-white text-md font-medium text-gray-500/75"
            dangerouslySetInnerHTML={{
              __html:
                "How about creating the best environment to relax yourself with your own emotions?",
            }}
          />
          <a
            href="https://universe-list.xyz/bots/1076426970914635776/invite"
            className={
              "mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
            }
          >
            <i className="fab fa-discord mr-2" />
            Invite Grippy
          </a>
        </div>

        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className={`fa fa-cogs text-2xl text-amber-500`} />{" "}
                Optimization
              </p>
              <p className="text-gray-500 line-clamp-4">
                With fast and customizable settings specific to your server,
                Grippy gives you a musical pleasure to the fullest.
              </p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i
                  className={`fa fa-universal-access text-2xl text-amber-500`}
                />{" "}
                24/7
              </p>
              <p className="text-gray-500 line-clamp-4">
                Our automation tool runs 24/7, ensuring your Discord server
                never misses a beat with the latest updates from your YouTube
                and Twitch channels.
              </p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className={`fa fa-shield text-2xl text-amber-500`} />{" "}
                Security
              </p>
              <p className="text-gray-500 line-clamp-4">
                An open source safe bot that you can browse and help us develop.
              </p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className={`fa fa-ticket text-2xl text-amber-500`} /> Support
              </p>
              <p className="text-gray-500 line-clamp-4">
                With our best teammates, we provide the fastest response to
                anyone who needs help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
        <>
          <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
            <img
              src="https://media.discordapp.net/attachments/1081656082881069147/1081946613741789254/image.png"
              width="256"
              className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black"
            />
            <p className="text-3xl text-white font-semibold">
              Elevate Your Discord Server
            </p>
            <p className="text-md text-white font-medium text-gray-500 line-clamp-5">
              Ready to take your Discord server to the next level? Want to
              automate your YouTube and Twitch channels effortlessly?"
            </p>
          </div>
          <img
            src="https://media.discordapp.net/attachments/1081656082881069147/1081946613741789254/image.png"
            className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black"
          />
        </>
      </div>
    </>
  );
}
