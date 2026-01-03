export default async function handler(req, res) {
  const target = req.query.url;

  if (!target) {
    res.status(400).send("Missing ?url=");
    return;
  }

  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*"
      }
    });

    // Forward status code
    res.status(response.status);

    // Forward content type
    const contentType = response.headers.get("content-type");
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }

    const body = await response.arrayBuffer();
    res.send(Buffer.from(body));
  } catch (err) {
    res.status(500).send("Proxy fetch failed");
  }
}
