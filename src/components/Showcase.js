import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">BANDIT</h1>
        <h2 className="showcase-header-text h-color">
          The greatest Complex Factions Discord Bot!
        </h2>
        <p className="showcase-para p-color">
          The best Discord bot for linking ComplexMC Factions with your Discord server!
          Includes many commands to fit your needs within your discord server.
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1137832494142587020&permissions=8&scope=bot">
              Invite now!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
