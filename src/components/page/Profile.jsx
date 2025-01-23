import React from 'react'
import profile from "../../assets/profile.jpg"
export default function Profile() {
  return (
    <>
   <main>
  <section>
    <div className="flex flex-col md:flex-row bg-black px-4 md:px-16 lg:px-32 mx-auto">
      {/* Avatar Section */}
      <div className="flex flex-col md:flex-row items-center m-4">
        <img
          src={profile}
          className="w-32 h-32 md:w-52 md:h-52 rounded-full"
        />
        <div className="mt-4 md:mt-12 mx-4">
          <span className="block text-white text-lg md:text-2xl font-medium">
            Moshi Moshi
          </span>
          <span className="block text-white text-xs md:text-sm">
            <i className="fa-solid fa-calendar-days mx-2  my-4" />
            Joined Jan 2025
          </span>
          <button className="rounded-md bg-red-700 text-white px-4 py-2 mt-2 md:mt-4">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:pt-12 space-y-2 md:space-y-0 md:space-x-4">
          <button className="rounded-md bg-stone-500 px-6 py-2 text-sm text-white hover:bg-stone-400">
            Rating <br />0
          </button>
          <button className="rounded-md bg-stone-500 px-6 py-2 text-sm text-white hover:bg-stone-400">
            Watching <br />0
          </button>
          <button className="rounded-md bg-stone-500 px-6 py-2 text-sm text-white hover:bg-stone-400">
            Lists <br />0
          </button>
          <button className="rounded-md bg-stone-500 px-6 py-2 text-sm text-white hover:bg-stone-400">
            More <br />...
          </button>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-red-900 mx-auto px-4 md:px-16 lg:px-32 py-8">
      {/* Welcome Section */}
      <div className="bg-black text-white p-6 rounded-lg mb-8">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <i className="fa-solid fa-circle-exclamation" />
            <span className="px-2">Welcome to your new profile</span>
          </div>
          <div>
            <p>Check-ins</p>
            <p>Your check-ins are private. Edit.</p>
          </div>
        </div>
        <p className="mt-4">
          We're still working on updating some profile features. To see badges,
          ratings breakdowns, and polls, please go to the previous version of
          your profile.
        </p>
      </div>

      {/* Check-ins Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-white">
          <p>Check-ins</p>
          <p>Your check-ins are private. Edit.</p>
        </div>
        <p className="text-white">No Check-ins yet</p>
      </div>

      {/* Ratings Section */}
      <div className="text-center mb-8">
        <p className="text-white">No Rating yet</p>
        <button className="bg-orange-600 text-white rounded-xl py-2 px-4 my-2">
          Browse a movie
        </button>
      </div>

      {/* Watchlist Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-white">
          <p>Watchlist</p>
          <p>Your check-ins are private. Edit.</p>
        </div>
        <div className="text-center">
          <p className="text-white">No Watching yet</p>
          <p className="text-white">
            Create a watchlist to track movies and shows you want to watch
          </p>
          <button className="bg-orange-600 text-white rounded-xl py-2 px-4 my-2">
            Browse a movie
          </button>
        </div>
      </div>

      {/* Lists Section */}
      <div className="text-center mb-8">
        <p className="text-white">No Lists yet</p>
        <button className="bg-orange-600 text-white rounded-xl py-2 px-8 my-2">
          Create One
        </button>
      </div>

      {/* Reviews Section */}
      <div className="text-center">
        <p className="text-white">No Review yet</p>
      </div>
    </div>
  </section>
</main>



    </>
  );
}
