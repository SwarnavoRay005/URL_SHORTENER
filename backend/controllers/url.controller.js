import Url from "../models/url.models.js";
import { nanoid } from "nanoid";

export const urlShorten = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "Please provide an url" });
    }

    try {
      new URL(originalUrl);
    } catch (error) {
      return res.status(400).json({ message: "Invalid URL" });
    }

    let shortID;
    let exists = true;

    while (exists) {
      shortID = nanoid(7);
      exists = await Url.findOne({ shortID });
    }

    const url = await Url.create({
      shortID,
      originalUrl,
    });

    res.status(201).json({
      message: "URL successfullly shortened",
      shortID: url.shortID,
      shortUrl: `${process.env.BASE_URL}/${url.shortID}`,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUrl = async (req, res) => {
  try {
    const shortID = req.params.shortID;
    const url = await Url.findOne({ shortID });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    url.clicks += 1;
    await url.save();
    return res.redirect(url.originalUrl);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
