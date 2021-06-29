export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/TWCN/templates"
  ];

  return loadTemplates(templatePaths);
}
