import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = '96b4f8c3d5d85d4b55e3c8140a1f2a';
    const client = new SiteClient(TOKEN);


    const recordCreated = await client.items.create({
      itemType: "968777",// ID do Model de "Communites" criado pelo Dato.
      ...request.body,
      //  title: "Eu moro em Bastos",
      // imageUrl: "https://mapio.net/images-p/52585529.jpg",
      // creatorSlug: "andersoncostadev"
    })

    console.log(recordCreated);

    response.json({
      dados: 'Dados',
      recordCreated: recordCreated,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}
