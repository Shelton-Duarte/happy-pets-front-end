import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the best food for my dog?',
    answer: `
      <h1>Crunchy and delicious dry dog food</h1> 
      <p>Dry dog food is an especially important food. This type of dog food contains a variety of nutrients and vitamins that are essential for a healthy life. 
      In addition, it also protects your dog's teeth by encouraging chewing. Since we know that dogs have different tastes, the happy pets dog 
      store has dog food from several quality brands.</p>
      <h1>Wet dog food – for more variety</h1>
      <p>To ensure a varied diet, it is advisable to give your dog wet food. This way, your dog will ingest essential vitamins and nutrients, but will also stay hydrated. For this reason, many owners choose to give their dog a combination of dry and wet food. 
      Thanks to the wide range of wet dog food in the happy pets store, you will be able to find the right alternative for your dog here.</p>
      <h1>Grain-free dog food – fully adapted to dogs</h1>
      <p>Dogs are carnivores, so any food should contain mainly meat. In addition, many dogs are allergic or intolerant to grains. Therefore, grain-free dog food is the perfect alternative for feeding your furry friend.
      In our dog shop you will find wet food, snacks and grain-free dog food. This way, we ensure that your dog has everything he needs in a grain-free way.</p>
    `
  },
  {
    question: 'Dog Accessories – What are the essential accessories?',
    answer: `
      <h1>Dog Accessories – What are the essential accessories?</h1>
      <p>There are many factors to consider when buying a dog food bowl. The differences are not limited to size, color and shape. The materials also vary greatly, for example, there are stainless steel, ceramic or plastic bowls. A suitable dog food bowl 
      is an absolutely essential item for any dog. You can complement your dog's mealtime with a bowl stand and mat. You can also keep food fresh by using storage containers.</p>
      <h1>Walking – dog leashes, dog collars, clothing and parasite protection</h1>
      <p>All dogs like to have a collar and a leash. In addition, dog collars or harnesses and a suitable leash are essential to make any walk more fun. On a cold or rainy day, you can protect your dog with a coat, raincoat or sweater. 
      Finally, in the summer, anti-parasite products will protect him against fleas, ticks and other insects. Discover a huge selection of dog collars and dog leashes at happy pets</p>
      <h1>Dog Toys – Exercise and Fun for Your Dog</h1>
      <p>Dogs are playful and curious by nature. Whether it's balls or ropes, thanks to the wide range of dog toys, 
      you're sure to find the best toy for your pooch at Happy Pets. You'll also find intelligence toys that help develop your dog's reasoning skills. 
      Discover all the dog toys here!</p>
    `
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Common questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            <h2 className="text-xl font-semibold">{faq.question}</h2>
          </button>
          {openIndex === index && (
            <div
              className="mt-2 px-4 py-2 bg-gray-100 rounded-lg"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
