import InquiryModal from "@/components/InquiryModal";

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <InquiryModal />
    </>
  )
}
