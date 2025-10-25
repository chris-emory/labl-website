export default function MapSection() {
  return (
    <section className="bg-gray-800 text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.012027028718!2d-84.32434992434769!3d33.78909913030912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506e3d3c9349f%3A0xa41e2b9d8b7e27a8!2sEmory%20University!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen
          className="rounded-md"
        ></iframe>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Location</h3>
          <p>Emory University<br />36 Eagle Row<br />Atlanta, GA 30322-2470</p>

          <h3 className="text-2xl font-semibold mt-8 mb-2">Contact</h3>
          <p>
            <a href="mailto:pwolff@emory.edu" className="hover:underline">
              pwolff@emory.edu
            </a>
            <br />
            Tel: 404-727-7458
          </p>
        </div>
      </div>
    </section>
  );
}
