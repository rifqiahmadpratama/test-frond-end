import { Footer } from "flowbite-react";

export default function FooterBar() {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="https://github.com/rifqiahmadpratama"
        by="Github"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://web.facebook.com/rifqiahmadpratama/">
          Facebook
        </Footer.Link>
        <Footer.Link href="https://www.instagram.com/rifqiahmadp/">
          Instagram
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
