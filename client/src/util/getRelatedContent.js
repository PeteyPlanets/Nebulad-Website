import axios from "axios";

const getRelatedContent = async (currentBlog) => {
  let firstBlog;
  let secondBlog;
  let thirdBlog;

  let setArtist = false;
  let setHooman = false;

  try {
    // 2) Get All Blogs
    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/blogs`);
    const allBlogs = res.data.blogs;

    // For Non-Music Blogs
    if (!currentBlog.isMusicBlog) {
      return [
        getRandomBlog(allBlogs),
        getRandomBlog(allBlogs),
        getRandomBlog(allBlogs),
      ];
    }

    // Filter allBlogs for blogs in current category
    const currentCategoryBlogs = allBlogs.filter(
      (blog) => blog.category.title === currentBlog.category.title
    );

    const sortedBlogs = currentCategoryBlogs.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });

    // Find index of current blog within currentCategoryBlogs
    const index = sortedBlogs.findIndex((blog) => blog._id === currentBlog._id);

    // First blog should be next blog in countdown or first blog of next countdown
    if (index < sortedBlogs.length - 1) firstBlog = sortedBlogs[index + 1];
    if (index === sortedBlogs.length - 1) {
      firstBlog = getNextBlogInCountdown(currentBlog, allBlogs);
    }

    // Second blog based on matching significant humans, if not matching artist, if not next blog
    const significantHoomans = JSON.parse(
      currentBlog.metadata
    ).significantHoomans;
    if (significantHoomans.length > 0) {
      // Check if any other blog has matching hoomans
      console.log("There are hoomans?", significantHoomans);
      const matchingHoomanBlog = getRandomBlogWithMatchingHoomans(
        significantHoomans,
        allBlogs,
        currentBlog._id
      );
      if (matchingHoomanBlog) {
        secondBlog = matchingHoomanBlog;
        setHooman = true;
      }
    }
    if (
      significantHoomans.length === 0 ||
      (significantHoomans.length > 0 && !secondBlog)
    ) {
      // Move on to matching artist instead
      const songs = JSON.parse(currentBlog.metadata).songs;
      const artists = songs.map((song) => song.artist);
      const randomArtistBlog = getRandomMatchingBlogByArtist(
        artists,
        allBlogs,
        currentBlog._id
      );

      // if matching artist set second related blog
      if (randomArtistBlog) {
        secondBlog = randomArtistBlog;
        setArtist = true;
      }

      // If not set secondBlog to next blog
      if (!randomArtistBlog) {
        if (index < sortedBlogs.length - 1) secondBlog = sortedBlogs[index + 2];
        if (index === sortedBlogs.length - 1) secondBlog = sortedBlogs[1];
      }
    }

    // Third Blog
    if (setHooman && !setArtist) {
      // Attempt to set artist
      const songs = JSON.parse(currentBlog.metadata).songs;
      const artists = songs.map((song) => song.artist);
      const randomArtistBlog = getRandomMatchingBlogByArtist(
        artists,
        allBlogs,
        currentBlog._id,
        secondBlog
      );

      if (randomArtistBlog) {
        console.log("setting random artist");
        thirdBlog = randomArtistBlog;
      }
    }

    if (!thirdBlog) {
      if (!setArtist && !setHooman) {
        if (index < sortedBlogs.length - 1) thirdBlog = sortedBlogs[index + 3];
        if (index === sortedBlogs.length - 1) thirdBlog = sortedBlogs[2];
      } else {
        if (index < sortedBlogs.length - 1) thirdBlog = sortedBlogs[index + 2];
        if (index === sortedBlogs.length - 1) thirdBlog = sortedBlogs[1];
      }
    }

    // console.log([firstBlog, secondBlog, thirdBlog]);
    return [firstBlog, secondBlog, thirdBlog];
  } catch (error) {
    console.log("Error in getRelatedContent.js", error);
  }
};

function getRandomBlogWithMatchingHoomans(names, blogs, currentBlogId) {
  const matchingBlogs = blogs.filter((blog) => {
    if (blog._id === currentBlogId || !blog.isMusicBlog) {
      return false;
    }

    const significantHoomans = JSON.parse(blog.metadata).significantHoomans;
    return significantHoomans.some((hooman) => names.includes(hooman));
  });

  if (matchingBlogs.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * matchingBlogs.length);
  return matchingBlogs[randomIndex];
}

function getRandomMatchingBlogByArtist(
  artists,
  blogs,
  currentBlogId,
  secondBlog = null
) {
  const matchingBlogs = blogs.filter((blog) => {
    if (
      blog._id === currentBlogId ||
      !blog.isMusicBlog ||
      (secondBlog && secondBlog._id === blog._id)
    ) {
      return false;
    }

    const songs = JSON.parse(blog.metadata).songs;
    return songs.some((song) => artists.includes(song.artist));
  });

  if (matchingBlogs.length === 0) {
    return null;
  }

  console.log("MAtching blgos = ", matchingBlogs);

  const randomIndex = Math.floor(Math.random() * matchingBlogs.length);
  return matchingBlogs[randomIndex];
}

function getNextBlogInCountdown(currentBlog, allBlogs) {
  switch (currentBlog.category) {
    case "50 to 50":
      return allBlogs.filter((blog) => blog.category === "51 to 51")[0];

    case "51 to 51":
      return allBlogs.filter((blog) => blog.category === "52 to 52")[0];

    case "52 to 52":
      return allBlogs.filter((blog) => blog.category === "53 to 53")[0];

    case "53 to 53":
      return allBlogs.filter((blog) => blog.category === "54 to 54")[0];

    case "54 to 54":
      return allBlogs.filter((blog) => blog.category === "55 to 55")[0];

    case "55 to 55":
      return allBlogs.filter((blog) => blog.category === "50 to 50")[0];

    default:
      return currentBlog;
  }
}

function getRandomBlog(blogs) {
  if (blogs.length === 0) {
    throw new Error("Blogs array must have at least one element");
  }

  const randomIndex = Math.floor(Math.random() * blogs.length);

  return blogs[randomIndex];
}

export default getRelatedContent;
