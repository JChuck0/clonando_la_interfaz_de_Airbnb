const groups = [
  { title: "Asistencia", links: ["Ayuda", "Seguridad", "Cancelaciones"] },
  { title: "Cómo ser anfitrión", links: ["Anfitrión", "Recursos", "Comunidad"] },
  { title: "Airbnb", links: ["Noticias", "Inversores", "Empleo"] },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-50 p-6 pb-24 md:pb-6">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="space-y-2">
            <h4 className="text-sm font-semibold">{group.title}</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </footer>
  );
}
