import AdminSidebar from "../../components/admin/AdminSidebar"
import AdminStats from "../../components/admin/AdminStats"
import AdminAddMovieForm from "../../components/admin/AdminAddMovieForm"
import AdminMovieTable from "../../components/admin/AdminMovieTable"

function AdminDashboard() {

    return (

        <div className="flex min-h-screen overflow-hidden">

            <AdminSidebar />

            <main className="flex-1 lg:ml-64 p-6 lg:p-10 max-w-7xl mx-auto space-y-10">

                <section>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold">
                            Admin Dashboard
                        </h2>

                        <p className="text-slate-500">
                            Welcome back, Administrator.
                        </p>
                    </div>

                    <AdminStats />

                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

                    <AdminAddMovieForm />

                    <AdminMovieTable />

                </div>

            </main>

        </div>

    )
}

export default AdminDashboard