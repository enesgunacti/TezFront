import { Component, OnInit } from "@angular/core";
import { DoucmentService } from "app/services/doucment.service";
import { ToastrService } from "ngx-toastr";
import { Belge } from "./document";

@Component({
  moduleId: module.id,
  selector: "documents-cmp",
  templateUrl: "documents.component.html",
})
export class DocumentsComponent implements OnInit {
  constructor(
    private documentService: DoucmentService,
    private toasterService: ToastrService
  ) {}
  documents: Belge[];
  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe((response) => {
      this.documents = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.documentService.deleteDocument(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
