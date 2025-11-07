import React from "react";

const WhyOurToys = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Why You Should Buy Our Toys</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-[#9e000017] p-4 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold border-b border-[#9e000034] pb-2 mb-2">
            1. Fostering Creativity and Imagination
          </h2>
          <p className="border-l-4 border-blue-400 pl-4 text-justify">
            Play is the foundation of innovation. Our toys encourage children to
            dream, imagine, and create without boundaries. By giving children
            the freedom to invent stories, build structures, and explore new
            ideas, our toys nurture a sense of curiosity and problem-solving—a
            skill that will guide them throughout life.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-md border-[#9e000017] transition">
          <h2 className="text-xl font-semibold border-b border-[#9e000034] pb-2 mb-2">
            2. Teaching Responsibility
          </h2>
          <p className="border-l-4 border-green-400 pl-4 text-justify">
            Some of our toys are designed to teach responsibility. From caring
            for a doll or a pet toy to organizing building blocks, children
            learn that their actions have consequences. These small lessons
            instill a sense of accountability and respect for their
            surroundings.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-md border-[#9e000017] transition">
          <h2 className="text-xl font-semibold border-b border-[#9e000034] pb-2 mb-2">
            3. Promoting Sharing and Empathy
          </h2>
          <p className="border-l-4 border-yellow-400 pl-4 text-justify">
            Many of our toys encourage collaborative play. When children play
            together, they learn to share, take turns, and empathize with
            others. These early experiences with teamwork and kindness lay the
            foundation for moral and social development.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow hover:shadow-md border-[#9e000017] transition">
          <h2 className="text-xl font-semibold border-b border-[#9e000034] pb-2 mb-2">
            4. Safe, Ethical, and Environmentally Friendly
          </h2>
          <p className="border-l-4 border-red-400 pl-4 text-justify">
            Our toys are made with safe, non-toxic materials. We care about
            children’s health and the planet’s future. By choosing eco-friendly
            toys, you teach children the importance of ethical choices and
            sustainability—a value they carry into adulthood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyOurToys;
