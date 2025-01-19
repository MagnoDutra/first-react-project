function Section({ title, children }) {
  return (
    <section id="examples">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
