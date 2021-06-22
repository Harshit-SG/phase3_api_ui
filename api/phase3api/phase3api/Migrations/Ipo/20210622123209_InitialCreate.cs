using Microsoft.EntityFrameworkCore.Migrations;

namespace phase3api.Migrations.Ipo
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ipo",
                columns: table => new
                {
                    IpoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(nullable: true),
                    BiddingDates = table.Column<string>(nullable: true),
                    PriceRange = table.Column<string>(nullable: true),
                    IssueSize = table.Column<string>(nullable: true),
                    ManagingDirector = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ipo", x => x.IpoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ipo");
        }
    }
}
