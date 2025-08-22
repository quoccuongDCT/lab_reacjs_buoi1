import FeatureCard from "./FeatureCard";

export default function Features() {
  const data = [
    { icon: "bi-collection", title: "Fresh new layout", text: "With Bootstrap 5, we've created a fresh new layout for this template!" },
    { icon: "bi-cloud-download", title: "Free to download", text: "Start Bootstrap has a powerful collection of free templates." },
    { icon: "bi-card-heading", title: "Jumbotron hero header", text: "The heroic part of this template is the jumbotron hero header!" },
    { icon: "bi-bootstrap", title: "Feature boxes", text: "We've created some custom feature boxes using Bootstrap icons!" },
    { icon: "bi-code", title: "Simple clean code", text: "We keep our dependencies up to date and squash bugs as they come!" },
    { icon: "bi-patch-check", title: "A name you trust", text: "Start Bootstrap has been the leader in free templates since 2013!" },
  ];

  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {data.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
