class Api::DepartmentsController < ApplicationController
  
  def index
    render json: Department.all
  end

  def show
  end

  def create
    department = Department.create(department_params)

    if department.save
      render json: department
    else
      render json: department.errors, status: 422
    end
    
  end

  def update
  end

  def destroy
  end

  private
    def department_params
      params.require(:department).permit(:name)
    end

end
