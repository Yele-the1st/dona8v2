import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComp() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className=" hover:bg-[#EDF1DC]" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="hover:bg-[#EDF1DC]" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="hover:bg-[#EDF1DC]" href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="hover:bg-[#EDF1DC]" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="hover:bg-[#EDF1DC]" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
