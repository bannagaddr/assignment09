import React from "react";

const CreativeChild = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="bg-linear-to-r from-purple-50 to-pink-50 p-10 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-snug">
            The Importance of Creative Toys for Children
          </h1>
          <div className="w-24 h-1 bg-purple-400 rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>

        <div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed border-l-4 border-purple-400 pl-6 md:pl-8 text-justify">
            Children are naturally curious, imaginative, and eager to explore
            the world around them. Creative toys provide the perfect outlet for
            this innate curiosity, allowing kids to experiment, invent, and
            express themselves freely. Unlike passive forms of entertainment,
            these toys encourage active engagement, helping children develop
            problem-solving skills, critical thinking, and resourcefulness from
            an early age. When building, painting, or role-playing, children
            learn to make decisions, overcome challenges, and see the
            consequences of their actions in a safe and playful environment.
            Moreover, creative play nurtures emotional intelligence by giving
            children the opportunity to express feelings, cooperate with peers,
            and empathize with others. By incorporating creative toys into daily
            life, parents not only provide fun and enjoyment but also support
            their children’s cognitive, social, and moral development, setting
            the foundation for lifelong learning, confidence, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeChild;
