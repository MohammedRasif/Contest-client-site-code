
import { FaRegCalendarAlt,  } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTelegram } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
    TwitterShareButton, TelegramShareButton, LinkedinShareButton, FacebookShareButton, WhatsappShareButton
} from "react-share";

const AllContestDetails = () => {
    const contests = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const contest = contests.find(contest => contest.id === idInt);
    const shareUrl = window.location.href;
    return (
        <div className="mx-52 pt-24">
            <img src={contest.Image} className="h-[400px] w-full" alt="" />
            <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold my-2">{contest.ContestName}</h1>
            <div>
            <div className="flex items-center space-x-2 ml-1 lg:text-xl text-[#666666]">
            <h3 className="font-medium text-black text-sm md:text-base lg:text-lg">Share:</h3>

                            <FacebookShareButton url={shareUrl}>
                                <LuFacebook className="cursor-pointer" />
                            </FacebookShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <FaXTwitter className="cursor-pointer" />
                            </TwitterShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <SlSocialLinkedin className="cursor-pointer" />
                            </LinkedinShareButton>
                            <TelegramShareButton url={shareUrl}>
                                <BsTelegram className="cursor-pointer" />
                            </TelegramShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <FaWhatsapp className="cursor-pointer" />
                            </WhatsappShareButton>
                        </div>
            </div>

            </div>
            <div className="mt-2 text-blue-500 flex items-center space-x-1 mr-16">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        <h1>JANUARY 11,2024</h1>
                    </div>
            <h1 className=" my-5">{contest.ContestDescription}</h1>
            <h1 className="text-2xl font-bold my-2">Contest Price:{contest.contestPrice}</h1>
            <Link to="/payment"><button className="btn glass bg-blue-600 w-full text-white">Register Now..........</button>
            </Link>
        </div>
    );
};

export default AllContestDetails;


















