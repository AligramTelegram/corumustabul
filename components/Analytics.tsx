import Script from "next/script";

/**
 * Google Analytics 4. Sadece NEXT_PUBLIC_GA_ID tanımlıysa yüklenir.
 * Vercel'de ortam değişkeni olarak GA ölçüm kimliğini (G-XXXXXXX) ekleyin.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
